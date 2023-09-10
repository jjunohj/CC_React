import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
    // Global State !! 여기에 저장된 데이터는 어디서든지 사용할 수 있다.
    // 쿼리를 날려서 데이터를 받아오면 그 데이터를 여기에 저장한다.
    // 그렇게 되면 글로벌 스테이트가 변경되기 때문에 그 데이터를 사용하는 모든 컴포넌트가 리렌더링 된다.
    // 또한, 페이지를 이동할 때마다 글로벌 스테이트인 인메모리캐시가 초기화되기 때문에 데이터가 날라간다.
    // 안날라게 하고 싶다면, 이 페이지 밖에 빼서 만들어야 한다.
  });

  // prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
