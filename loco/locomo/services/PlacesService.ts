import firestore from '@react-native-firebase/firestore';

const PlacesService = {
  getNearbyPlaces: async (location, radius) => {
    const placesRef = firestore().collection('places');
    const query = placesRef
      .where('geoHash', '>=', geohashQuery(location, radius).lower)
      .where('geoHash', '<=', geohashQuery(location, radius).upper);
      
    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};