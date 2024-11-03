const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "shank",
  programName: "bgh_poke_program",
  programId: "PoKE7U9onNxHtAR6mo98RP25bzYYXr8AX4Dnqpku8BA",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "bgh-poke"),
});
