import styled from "styled-components/native";

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: "#4CA1F2",
})``;