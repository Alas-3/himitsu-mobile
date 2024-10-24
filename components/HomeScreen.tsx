import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { styles as homeScreenStyles } from './styles/HomeScreenStyles';

const { width } = Dimensions.get('window');

const TRENDING_DATA = [
  { id: '1', title: 'Attack on Titan', image: '' },
  { id: '2', title: 'Demon Slayer', image: '' },
  { id: '3', title: 'My Hero Academia', image: '' },
  // Add more trending anime data
];

const CATEGORIES: CategoryItem[] = [
    { id: '1', title: 'Action', icon: 'flame' },
    { id: '2', title: 'Romance', icon: 'heart' },
    { id: '3', title: 'Comedy', icon: 'happy' },
    { id: '4', title: 'Sci-Fi', icon: 'planet' },
    { id: '5', title: 'Horror', icon: 'skull' },
    { id: '6', title: 'Fantasy', icon: 'color-wand' },
  ];

interface TrendingItem {
    id: string;
    title: string;
    image: string;
  }
  
  interface CategoryItem {
    id: string;
    title: string;
    icon: 'flame' | 'heart' | 'happy' | 'planet' | 'skull' | 'color-wand'; // Updated
  }

  export default function HomeScreen() {
    const renderTrendingItem = ({ item }: { item: TrendingItem }) => (
      <TouchableOpacity style={homeScreenStyles.trendingItem}>
        <Image source={{ uri: item.image }} style={homeScreenStyles.trendingImage} />
        <Text style={homeScreenStyles.trendingTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  
    const renderCategoryItem = ({ item }: { item: CategoryItem }) => (
      <TouchableOpacity style={homeScreenStyles.categoryItem}>
        <View style={homeScreenStyles.categoryIcon}>
          <Ionicons name={item.icon} size={24} color="#fff" />
        </View>
        <Text style={homeScreenStyles.categoryTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  
    return (
      <SafeAreaView style={homeScreenStyles.container}>
        <StatusBar barStyle="light-content" />
        <View style={homeScreenStyles.header}>
          <Text style={homeScreenStyles.logo}>秘Anime</Text>
          <View style={homeScreenStyles.headerIcons}>
            <Ionicons name="search" size={24} color="#fff" style={homeScreenStyles.icon} />
            <Ionicons name="person-circle" size={24} color="#fff" style={homeScreenStyles.icon} />
          </View>
        </View>
        <ScrollView style={homeScreenStyles.content}>
          <View style={homeScreenStyles.featuredContent}>
            <Image
              source={{ uri: 'https://example.com/featured-anime.jpg' }}
              style={homeScreenStyles.featuredImage}
            />
            <View style={homeScreenStyles.featuredTitleContainer}>
              <Text style={homeScreenStyles.featuredTitle}>Featured Anime Title</Text>
              <TouchableOpacity style={homeScreenStyles.playButton}>
                <Ionicons name="play" size={18} color="#000" />
                <Text style={homeScreenStyles.playButtonText}>Play</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={homeScreenStyles.section}>
            <Text style={homeScreenStyles.sectionTitle}>Trending Now</Text>
            <FlatList
              data={TRENDING_DATA}
              renderItem={renderTrendingItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={homeScreenStyles.section}>
            <Text style={homeScreenStyles.sectionTitle}>Categories</Text>
            <FlatList
              data={CATEGORIES}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              numColumns={3}
              columnWrapperStyle={homeScreenStyles.categoryRow}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }