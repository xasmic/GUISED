import { VersionChrome } from "../../components/VersionChrome";
import { MaisonPage } from "../../components/maison/MaisonPage";

export default function MaisonReliquaryVersion() {
  return (
    <>
      <VersionChrome current="maison-reliquary" />
      <MaisonPage tone="gothic" />
    </>
  );
}
