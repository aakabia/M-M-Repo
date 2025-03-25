import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" ,headerShown: false}} />
    </Stack>
  );
}


// Above, we currently have one page which is the index page