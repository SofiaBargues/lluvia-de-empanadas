export const Snowflake = ({ id, style }: { id: any; style: any }) => {
  return (
    <p className="Snowflake" id={`items${id}`} style={style}>
      *
    </p>
  );
};
export default Snowflake;
