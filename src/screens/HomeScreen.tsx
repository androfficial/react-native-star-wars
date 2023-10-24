import { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/EvilIcons';

import { getStarWarsPeople } from '@/api/starwars/people/peopleRequests';
import { favoriteCharactersData } from '@/data/data';
import { useCharacterContext } from '@/hooks/useCharacterContext';
import { IPageProps } from '@/navigation/navigationTypes';
import { ScreenNames } from '@/types/ScreenNames';

export const HomeScreen: FC<IPageProps<ScreenNames.HOME>> = ({ navigation }): JSX.Element => {
  const { characters, setCharacters } = useCharacterContext();

  const [pageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchStarWarsPeople = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const {
        data: { results, count },
      } = await getStarWarsPeople(page);

      setCharacters(results);
      setCount(count);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [setCharacters, page]);

  const nextPage = (): void => {
    if (page < Math.ceil(count / pageSize)) {
      setPage(page + 1);
    }
  };

  const prevPage = (): void => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    void fetchStarWarsPeople();
  }, [fetchStarWarsPeople]);

  return (
    <SafeAreaView className='grow bg-[#f6f5f3] p-[16px]'>
      <View className='grow flex-col gap-y-[16px]'>
        <View className='flex-col gap-y-[16px]'>
          <View className='flex-row items-center justify-between'>
            <Text className='text-[32px] font-normal text-[#000000de]'>Fans</Text>
            <TouchableOpacity
              onPress={() => {}}
              className='min-w-[64px] items-center justify-center rounded-[4px] border border-solid border-[#fd5751] px-[15px] py-[5px] text-center'
            >
              <Text className='text-[14px] font-medium uppercase leading-[28px] text-[#fd5751]'>
                Clear Fans
              </Text>
            </TouchableOpacity>
          </View>
          <View className='flex-row items-center gap-x-[16px]'>
            {favoriteCharactersData.map(({ id, count, name }) => (
              <View key={id} className='grow flex-col rounded-[4px] bg-white p-[15px]'>
                <Text className='text-[32px] font-normal text-[#000000de]'>{count}</Text>
                <Text className='text-[12px] font-normal text-[#000000de]'>{name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className='grow gap-y-[12px] rounded-[4px] bg-white p-[15px]'>
          <View className='relative'>
            <View
              className='absolute left-[12px] top-1/2' // -translate-y-1/2 transform
              style={{ transform: [{ translateY: -16 }] }}
            >
              <Icon name='search' size={32} color='#000000' />
            </View>
            <TextInput
              value={value}
              onChangeText={setValue}
              className='h-[60px] grow rounded-[4px] border border-solid border-gray-500 pl-[48px] pr-[12px]'
              placeholder='Search'
            />
          </View>

          <View>
            {loading ? (
              <ActivityIndicator />
            ) : error ? (
              <Text>Error!</Text>
            ) : (
              <FlatList
                data={characters}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.CHARACTER_INFO)}>
                    <View>
                      <Text>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
