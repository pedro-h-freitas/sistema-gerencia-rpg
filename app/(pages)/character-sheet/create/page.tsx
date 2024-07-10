"use client";

import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { LayoutBasePagina } from "@/app/shared/layouts";
import { SkillsTable } from "@/app/shared/components";

export default function Page() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <LayoutBasePagina
      titulo="Nova Ficha"
      barraDeFerramentas={
        <Paper sx={{ margin: 1, padding: 1 }}>
          <Typography>Test</Typography>
        </Paper>
      }
    >
      <Box
        margin={1}
        flexGrow={1}
        padding={1}
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        gap={1}
        alignItems="flex-start"
      >
        <Grid
          container
          spacing={1}
          component={Paper}
          margin={0}
          paddingRight={1}
          paddingBottom={1}
        >
          <Grid item xs={12}>
            <TextField fullWidth label="Nome"></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Origem"></TextField>
          </Grid>

          <Grid item xs={smDown ? 12 : 9.6}>
            <TextField fullWidth label="Classe"></TextField>
          </Grid>
          <Grid item xs={smDown ? 12 : 2.4}>
            <TextField fullWidth label="Nex"></TextField>
          </Grid>

          <Grid item xs={smDown ? 6 : 2.4}>
            <TextField fullWidth label="FOR"></TextField>
          </Grid>

          <Grid item xs={smDown ? 6 : 2.4}>
            <TextField fullWidth label="AGI"></TextField>
          </Grid>

          <Grid item xs={smDown ? 4 : 2.4}>
            <TextField fullWidth label="INT"></TextField>
          </Grid>

          <Grid item xs={smDown ? 4 : 2.4}>
            <TextField fullWidth label="VIG"></TextField>
          </Grid>

          <Grid item xs={smDown ? 4 : 2.4}>
            <TextField fullWidth label="PRE"></TextField>
          </Grid>
        </Grid>

        <SkillsTable flexGrow={1} />
      </Box>
    </LayoutBasePagina>
  );
}
