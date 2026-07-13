import { VersionChrome } from "../../components/VersionChrome";
import { ReliquaryPage } from "../../components/reliquary/ReliquaryPage";

export default function ReliquaryVersion() {
  return (
    <>
      <VersionChrome current="reliquary" />
      <ReliquaryPage />
    </>
  );
}
