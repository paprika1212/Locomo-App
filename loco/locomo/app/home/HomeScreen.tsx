import { useUserLocation } from '../../hooks/useLocation';
import RecommendationsService from '../../services/RecommendationsService';

const HomeScreen = () => {
  const { location } = useUserLocation();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const loadRecommendations = async () => {
      const results = await RecommendationsService.getAIRecommendations(
        location,
        userPreferences
      );
      setRecommendations(results);
    };
    loadRecommendations();
  }, [location]);

  return (
    <FlatList
      data={recommendations}
      renderItem={({ item }) => <PlaceCard place={item} />}
    />
  );
};