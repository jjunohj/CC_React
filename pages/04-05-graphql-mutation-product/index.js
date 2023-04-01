import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    # 타입
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      # 변수
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 해준다. 원래는 $를 써줘야함
        seller: "seller",
        createProductInput: {
          name: "마우스",
          detail: "정말 좋은 마우스",
          price: 3000,
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
