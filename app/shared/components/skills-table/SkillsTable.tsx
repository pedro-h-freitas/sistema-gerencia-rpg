import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  BoxProps,
  Box,
} from "@mui/material";

interface ISkillData {
  name: string;
  atribute: "FOR" | "AGI" | "INT" | "VIG" | "PRE";
  modifications?: ("load penalty" | "trained only")[];
}

export function SkillsTable({ ...props }: BoxProps) {
  const skills: ISkillData[] = [
    {
      name: "ACROBACIA",
      atribute: "AGI",
      modifications: ["load penalty"],
    },
    {
      name: "ADESTRAMENTO",
      atribute: "PRE",
      modifications: ["trained only"],
    },
    {
      name: "ARTES",
      atribute: "PRE",
      modifications: ["trained only"],
    },
    {
      name: "ATLETISMO",
      atribute: "FOR",
    },
    {
      name: "ATUALIDADES",
      atribute: "INT",
    },
    {
      name: "CIÊNCIAS",
      atribute: "INT",
      modifications: ["trained only"],
    },
    {
      name: "CRIME",
      atribute: "AGI",
      modifications: ["load penalty", "trained only"],
    },
    {
      name: "DIPLOMACIA",
      atribute: "PRE",
      modifications: ["trained only"],
    },
    {
      name: "ENGANAÇÃO",
      atribute: "PRE",
      modifications: ["trained only"],
    },
    {
      name: "FORTITUDE",
      atribute: "VIG",
    },
    {
      name: "FURTIVIDADE",
      atribute: "AGI",
      modifications: ["trained only"],
    },
    {
      name: "INICIATIVA",
      atribute: "AGI",
    },
    {
      name: "INTIMIDAÇÃO",
      atribute: "PRE",
      modifications: ["trained only"],
    },
    {
      name: "INTUIÇÃO",
      atribute: "PRE",
    },
    {
      name: "INVESTIGAÇÃO",
      atribute: "INT",
    },
    {
      name: "LUTA",
      atribute: "FOR",
    },
    {
      name: "MEDICINA",
      atribute: "INT",
    },
    {
      name: "OCULTISMO",
      atribute: "INT",
      modifications: ["trained only"],
    },
    {
      name: "PERCEPÇÃO",
      atribute: "PRE",
    },
    {
      name: "PILOTAGEM",
      atribute: "AGI",
      modifications: ["trained only"],
    },
    {
      name: "PONTARIA",
      atribute: "AGI",
    },
    {
      name: "PROFISSÃO",
      atribute: "INT",
      modifications: ["trained only"],
    },
    {
      name: "REFLEXOS",
      atribute: "AGI",
    },
    {
      name: "RELIGIÃO",
      atribute: "PRE",
      modifications: ["trained only"],
    },
    {
      name: "SOBREVIVÊNCIA",
      atribute: "INT",
    },
    {
      name: "TÁTICA",
      atribute: "INT",
      modifications: ["trained only"],
    },
    {
      name: "TECNOLOGIA",
      atribute: "INT",
      modifications: ["trained only"],
    },
    {
      name: "VONTADE",
      atribute: "PRE",
    },
  ];

  return (
    <Box {...props}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell width="auto">
                <Typography variant="h6">Pericias</Typography>
              </TableCell>
              <TableCell width="auto">
                <Typography variant="h6">Dados</Typography>
              </TableCell>
              <TableCell width="auto">
                <Typography variant="h6">Bônus</Typography>
              </TableCell>
              <TableCell width="auto">
                <Typography variant="h6">Treino</Typography>
              </TableCell>
              <TableCell width="auto">
                <Typography variant="h6">Outros</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.map(({ name, atribute, modifications }) => {
              const modificationsString = !modifications
                ? ""
                : modifications
                    .map((mod) => (mod === "load penalty" ? "+" : "*"))
                    .join("");

              return (
                <TableRow key={name}>
                  <TableCell>
                    <Typography>
                      {name}
                      {modificationsString}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <TextField placeholder={atribute} />
                  </TableCell>
                  <TableCell>
                    <TextField placeholder="+ 0" />
                  </TableCell>
                  <TableCell>
                    <TextField placeholder="D" />
                  </TableCell>
                  <TableCell>
                    <TextField placeholder="0" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
