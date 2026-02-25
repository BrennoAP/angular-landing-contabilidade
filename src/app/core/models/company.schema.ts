import { z } from 'zod';



const LocationSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  zoom: z.number().min(1).max(22),
});

const SocialsSchema = z.object({
  linked: z.string().min(1, "Link do LinkedIn é obrigatório"),
  instagram: z.string().min(1, "Instagram é obrigatório"),
  facebook: z.string().min(1, "Facebook é obrigatório"),
});


export const CompanySchema = z.object({
  name: z.string().min(1, "O nome não pode ficar vazio"),
  

  cnpj: z.union([z.string(), z.number()])
    .transform(val => val.toString().replace(/\D/g, ''))
    .refine(val => val.length === 14, { message: "CNPJ deve ter exatamente 14 números" }),

  description: z.string().min(1, "A descrição é obrigatória"),
  address: z.string().min(1, "O endereço é obrigatório"),
  city: z.string().min(1, "A cidade é obrigatória"),
  state: z.string().length(2, "Use a sigla do estado (ex: MG)"),


  cep: z.union([z.string(), z.number()])
    .transform(val => val.toString().replace(/\D/g, ''))
    .refine(val => val.length === 8, { message: "CEP deve ter exatamente 8 números" }),

  phone: z.union([z.string(), z.number()]).transform(val => val.toString()),
  whatsapp: z.union([z.string(), z.number()]).transform(val => val.toString()),
  
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  
  location: LocationSchema,
  socials: SocialsSchema,
});



export const ServiceSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
});

export const FaqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const TestimonialSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  text: z.string().min(1),
  initials: z.string().min(1).max(3),
});


export type Company = z.infer<typeof CompanySchema>;
export type CompanyService = z.infer<typeof ServiceSchema>;
export type FaqItem = z.infer<typeof FaqSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;