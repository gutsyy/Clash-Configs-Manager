import { useRouter } from "next/router";
import { Layout } from "../../ccm-components";

const Servers = () => {
  const router = useRouter();

  const { pid } = router.query;

  return <Layout>Servers</Layout>;
};

export default Servers;
