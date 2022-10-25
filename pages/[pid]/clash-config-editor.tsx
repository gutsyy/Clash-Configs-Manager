import { useRouter } from "next/router";
import { Layout } from "../../ccm-components";

const ClashConfigEditor = () => {
  const router = useRouter();

  const { pid } = router.query;

  return <Layout>Clash Config Editor</Layout>;
};

export default ClashConfigEditor;
