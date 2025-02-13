import { admissionDTO } from "../fixtures/admissionDTO";

export const admissionRoutes = (server) => {
  server.namespace("/admissions", () => {
    server.post("/").intercept((req, res) => {
      const body = req.jsonBody();
      switch (body.admDate) {
        case "fail":
          res.status(400);
          break;
        default:
          res.status(201).json(202);
          break;
      }
    });
    server.put("/").intercept((req, res) => {
      const body = req.jsonBody();
      switch (body.note) {
        case "fail":
          res.status(400);
          break;
        default:
          res.status(200).json(null);
          break;
      }
    });
    server.get("/").intercept((req, res) => {
      const code = req.query.patientCode;
      switch (code) {
        case "10000":
          res.status(400);
          break;
        case "21266":
          res.status(204);
          res.body = null;
          break;
        default:
          res.status(200).json([admissionDTO, admissionDTO, admissionDTO]);
      }
    });
    server.get("/current").intercept((req, res) => {
      const code = req.query.patientCode;
      switch (code) {
        case "50":
          res.status(400);
          break;
        case "21266":
          res.status(204);
          res.body = null;
          break;
        default:
          res.status(200).json(admissionDTO);
      }
    });
    server.post("/discharge").intercept((req, res) => {
      const body = req.jsonBody();

      switch (body.note) {
        case "fail":
          res.status(400).json(null);
          break;
        default:
          res.status(200).json(null);
      }
    });
  });
};
