type Props = {
  preview: boolean;
};

export const Banner = ({ preview }: Props) => {
  return (
    <div className="mb-8 text-base font-semibold text-center text-white">
      {preview ? (
        <>
          This is page is showing draft content.{" "}
          <a
            href="/api/exit-preview"
            className="underline transition-colors duration-300 hover:text-emerald-500"
          >
            Click here
          </a>{" "}
          to exit preview mode.
        </>
      ) : (
        <>
          This is page is showing published content.{" "}
          <a
            href="/api/preview"
            className="underline transition-colors duration-300 hover:text-emerald-500"
          >
            Click here
          </a>{" "}
          to enter preview mode.
        </>
      )}
    </div>
  );
};
