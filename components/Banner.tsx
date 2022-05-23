import { useRouter } from "next/router";

type Props = {
  preview: boolean;
};

const Banner = ({ preview }: Props) => {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="mb-8 text-base text-center text-gray-900">
      {preview ? (
        <>
          This is page is showing draft content.{" "}
          <a
            className="underline transition-colors duration-300 cursor-pointer hover:text-emerald-600"
            onClick={() => handleClick("/api/exit-preview")}
          >
            Click here
          </a>{" "}
          to exit preview mode.
        </>
      ) : (
        <>
          This is page is showing published content.{" "}
          <a
            className="underline transition-colors duration-300 cursor-pointer hover:text-emerald-600"
            onClick={() => handleClick("/api/preview")}
          >
            Click here
          </a>{" "}
          to enter preview mode.
        </>
      )}
    </div>
  );
};

export default Banner;
