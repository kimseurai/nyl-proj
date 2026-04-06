type ClaimCardsProps = {
  header: string;
  description: string;
  buttonText?: string;
  buttonFunc: () => void;
};

export default function ClaimCards({
  header,
  description,
  buttonText = "Continue",
  buttonFunc,
}: ClaimCardsProps) {
  return (
    <div>
      <h3>{header}</h3>
      <p>{description}</p>
      <button onClick={buttonFunc}>{buttonText}</button>
    </div>
  );
}