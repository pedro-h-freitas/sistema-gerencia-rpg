import { Paper, Typography } from "@mui/material";

import { LayoutBasePagina } from "@/app/shared/layouts";

export default function Page() {
  return (
    <LayoutBasePagina titulo="Fichas">
      <Paper sx={{ margin: 1, padding: 1 }}>
        <Typography>Test</Typography>
      </Paper>
    </LayoutBasePagina>
  );
}
