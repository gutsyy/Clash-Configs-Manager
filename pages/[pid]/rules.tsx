import { useRouter } from "next/router";
import { Layout } from "../../ccm-components";

const Rules = () => {
  const router = useRouter();

  const { pid } = router.query;

  return <Layout>Rules</Layout>;
};

export default Rules;
