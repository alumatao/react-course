export default function tabs({ children, buttons, buttonsContainer = 'menu' }) {
    const ButtonsContainer = buttonsContainer;
    return (
    <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
    </>
    );
}