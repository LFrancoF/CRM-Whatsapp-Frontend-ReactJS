import Typography from "@mui/material/Typography";

const Title = (props) => {
	return (
		<Typography variant="h5" color="primary" gutterBottom>
			{props.children}
		</Typography>
	);
}

export default Title;
