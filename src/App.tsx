import ModalComponent from "./modules/modal/components/Modal";

export function App() {
  return (
    <div className="App">
      <h1>App</h1>

      {/*Way A  */}
      <ModalComponent>
        <ModalComponent.OpenBtn
          onClick={() => console.log("User action beffore opening the modal")}
        />
        <ModalComponent.DialogBox>
          <ModalComponent.CloseBtn
            onClick={() => console.log("User action before closing the modal")}
          />
        </ModalComponent.DialogBox>
      </ModalComponent>

      {/*Way B */}
      {/* <ModalComponent>
        <OpenBtn
          onClick={() => console.log("User action before closing the modal")}
        />
        <DialogBox>
          <CloseBtn
            onClick={() => console.log("User action before closing the modal")}
          />
        </DialogBox>
      </ModalComponent> */}
    </div>
  );
}
