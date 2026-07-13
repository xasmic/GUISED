import { VersionChrome } from "../../components/VersionChrome";
import { MaisonPage } from "../../components/maison/MaisonPage";

export default function MaisonVersion() {
  return (
    <>
      <VersionChrome current="maison" />
      <MaisonPage />
    </>
  );
}
