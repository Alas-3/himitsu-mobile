import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E50914',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  content: {
    flex: 1,
  },
  featuredContent: {
    width: '100%',
    height: 450,
    marginBottom: 20,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  featuredTitleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 16,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  playButtonText: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    marginLeft: 16,
  },
  trendingItem: {
    marginRight: 12,
    marginLeft: 16,
    width: 120,
  },
  trendingImage: {
    width: 120,
    height: 180,
    borderRadius: 4,
  },
  trendingTitle: {
    color: '#fff',
    marginTop: 4,
    fontSize: 14,
  },
  categoryRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: 'center',
    width: (width - 64) / 3,
    marginBottom: 20,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E50914',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 14,
  },
});
