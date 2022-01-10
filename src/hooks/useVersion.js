import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const useVersion = () => {
  const { siteConfig } = useDocusaurusContext();
  const { version } = siteConfig.customFields;
  return version;
};

export default useVersion;
