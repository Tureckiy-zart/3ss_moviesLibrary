import { useHistory } from "react-router";
import { BntGroupe, ButtonShrink } from "../stylredComponents/Button.styled";

export const ButtonsHistoryReturn = () => {
  const history = useHistory();
  const goHome = () => history.push("/");
  const goBack = () => history.goBack();
  return (
    <BntGroupe>
      <ButtonShrink onClick={goBack}>Go Back</ButtonShrink>
      <ButtonShrink onClick={goHome}>Home</ButtonShrink>
    </BntGroupe>
  );
};
export const GoHomeBtn = () => {
  const history = useHistory();
  const goHome = () => history.push("/");
  return (
    <BntGroupe>
      <ButtonShrink onClick={goHome}>Go home</ButtonShrink>
    </BntGroupe>
  );
};
