/** Styled component import that wraps around components to apply styles */
import Wrapper from "../../assets/wrappers/ClientPageWrapper.js";

function SettingsPage() {
  return (
    <Wrapper>
      <span style={{ color: "white", fontSize: "50px" }}>Page settings</span>
    </Wrapper>
  );
}
export default SettingsPage;
