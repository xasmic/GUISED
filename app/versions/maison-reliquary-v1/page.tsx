import { VersionChrome } from "../../components/VersionChrome";
import { MaisonPageV1 } from "../../components/maison/MaisonPageV1";

export default function MaisonReliquaryV1Version() {
  return (
    <>
      <VersionChrome current="maison-reliquary-v1" />
      <MaisonPageV1 />
    </>
  );
}
