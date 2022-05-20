import Link from "next/link";

type Props = {
  preview: boolean;
};

export const Banner = ({ preview }: Props) => {
  return (
    <div className="mb-8 text-base font-semibold text-center text-gray-900">
      {preview ? (
        <>
          This is page is showing draft content.{" "}
          <Link href="/api/exit-preview" prefetch={false}>
            <a className="underline transition-colors duration-300 hover:text-emerald-600">
              Click here
            </a>
          </Link>{" "}
          to exit preview mode.
        </>
      ) : (
        <>
          This is page is showing published content.{" "}
          <Link href="/api/preview" prefetch={false}>
            <a className="underline transition-colors duration-300 hover:text-emerald-600">
              Click here
            </a>
          </Link>{" "}
          to enter preview mode.
        </>
      )}
    </div>
  );
};
