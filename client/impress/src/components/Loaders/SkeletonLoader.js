import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = (props) => (
  <div className="pb-5">
    <div className="rounded-xl bg-white shadow-xl lg:max-w-2xl  max-w-wd mx-auto object-fill border border-gray-300 items-center">
      <ContentLoader
        speed={2}
        width={400}
        height={300}
        viewBox="0 0 400 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <circle cx="31" cy="31" r="15" />
        <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
        <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
        <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
      </ContentLoader>
    </div>
  </div>
);

export default SkeletonLoader;
