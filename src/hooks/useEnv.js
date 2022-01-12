import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const useEnv = () => {
  const { siteConfig } = useDocusaurusContext();
  const { env } = siteConfig.customFields;
  return env;
};

export default useEnv;
