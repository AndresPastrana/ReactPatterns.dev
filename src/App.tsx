import ModalComponent from "./modules/01Compund Pattern/modal/components/Modal";

export function App() {
  return (
    <div className="App">
      {/*Way A  */}
      <ModalComponent>
        <ModalComponent.OpenBtn onClick={() => console.log("Open Modal")} />
        <ModalComponent.DialogBox>
          <ModalComponent.CloseBtn onClick={() => console.log("Close Modal")} />
        </ModalComponent.DialogBox>
      </ModalComponent>
    </div>
  );
}
