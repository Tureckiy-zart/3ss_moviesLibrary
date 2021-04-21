import React from "react";
import styles from "./MoviesList.module.css";
const MoviesList = ({ data, li: Li }) => {
  return !(data.length > 0) ? (
    <h2>nothing found</h2>
  ) : (
    <ul >
    {/* <ul className={styles.MoviesList}> */}
      {data.map((item) => (
        <Li key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MoviesList;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 400,
//     width: 300,
//   },
// }));

// export default function MoviesList({ data, li: Li }) {
//   const [spacing] = React.useState(5);
//   const classes = useStyles();

//   return (
//     <Grid container className={classes.root} spacing={2}>
//       <Grid item xs={12}>
//         <Grid container justify="center" spacing={spacing}>
//           {data.map((item) => (
//             <Grid key={item.id} item>
//               <Paper className={classes.paper}>
//                 <Li key={item.id} item={item} />
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
