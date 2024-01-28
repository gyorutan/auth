import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="이런! 뭔가 잘못됬어요..."
      backButtonLabel="다시 로그인하기"
      backButtonHref="/auth/login"
    >
      <div className="w-full justify-center flex">
        <ExclamationTriangleIcon className="h-5 w-5 text-destructive" />
      </div>
    </CardWrapper>
  );
};
