import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/products/${id}` : null);

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledButton type="button" onClick={() => router.push("/")}>
        Back to all
      </StyledButton>
      <StyledButton
        type="button"
        onCLick={() => {
          setIsEditMode(!isEditMode);
          isEditMode && <ProductForm onSubmit={onSubmit} product={data} />;
        }}
      >
        EDIT
      </StyledButton>
    </ProductCard>
  );
}
