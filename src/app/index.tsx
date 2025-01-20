import { Text } from "react-native"
import * as S from './styles'
import { useFonts, Rubik_400Regular, Rubik_500Medium, Rubik_600SemiBold, Rubik_700Bold } from '@expo-google-fonts/rubik'
import Loading from "@/components/loading"

const Index = () => {
  const [fontLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  })

  if (!fontLoaded) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.Texto>VAPO NELAS CACHOOROO</S.Texto>
    </S.Container>
  )
}

export default Index;