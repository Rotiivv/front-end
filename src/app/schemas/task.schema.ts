import z from "zod";

const taskSchema = z.object({
  title: z.string().nonempty("Título é obrigatório."),
  description: z.string(),
  status: z.string().nonempty(),
  priority: z.string().nonempty(),
});

export default taskSchema;
