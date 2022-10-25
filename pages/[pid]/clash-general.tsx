import { useRouter } from "next/router";
import { Layout } from "../../ccm-components";

const Clash = () => {
  const router = useRouter();

  const { pid } = router.query;

  return <Layout>Clash General</Layout>;
};

export default Clash;
