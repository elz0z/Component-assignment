import Button from './Button'
export default function Aside() {

  return (
    <aside style={{
      padding: "5%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "2%",
      border: "3px solid teal",
    }}>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </aside>
  );
}