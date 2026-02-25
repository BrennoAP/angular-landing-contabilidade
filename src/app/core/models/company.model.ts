import { z } from 'zod';
import { 
  CompanySchema, 
  ServiceSchema, 
  FaqSchema, 
  TestimonialSchema,
  Company,
  CompanyService,
  FaqItem,
  Testimonial 
} from './company.schema';


//SE HOUVER ERROS NOS DADOS E A APLICAÇÂO QUEBRAR OLHE O CONSOLE


export const COMPANY: Company = CompanySchema.parse({
  name: 'Contabilidade Cont',
  cnpj: 23322455555546,
  description: 'Há décadas ajudando empresas de Viçosa a crescer com segurança e transparência.',
  address: 'Rua Temp 123',
  city: 'Viçosa',
  state: 'MG',
  cep: 12345000,
  phone: 3133347555,
  whatsapp: 31933345555,
  email: 'contato@email.com',
  location: {
    lat: -20.7546,
    lng: -42.8810,
    zoom: 16
  },
  socials: {
    linked: 'www.linkdnl.com/temp',
    instagram: '@insta',
    facebook: 'www.facebook.com/temp',
  },
});


export const COMPANY_SERVICES: Record<string, CompanyService> = z.record(z.string(), ServiceSchema).parse({
  aberturaEmpresa: {
    title: 'Abertura de Empresas',
    description: 'Comece seu negócio do jeito certo e sem burocracia.',
    icon: 'add_business',
  },
  gestaoFiscal: {
    title: 'Gestão Fiscal',
    description: 'Planejamento tributário para você pagar o mínimo de impostos legalmente.',
    icon: 'account_balance',
  },
  folhaPagamento: {
    title: 'Folha de Pagamento',
    description: 'Gestão completa de DP para sua equipe.',
    icon: 'groups',
  },
});


export const COMPANY_FAQ: FaqItem[] = z.array(FaqSchema).parse([
  {
    question: 'Como funciona a migração de contabilidade?',
    answer: 'É simples e cuidamos de tudo. Analisamos sua situação atual, solicitamos a documentação ao antigo contador e fazemos a transição sem interromper suas atividades.'
  },
  {
    question: 'Vocês atendem MEI?',
    answer: 'Sim! Atendemos desde o microempreendedor individual até empresas de maior porte, garantindo que você esteja sempre em dia com o governo.'
  },
  {
    question: 'Como é feito o atendimento?',
    answer: 'Valorizamos o contato direto. Nosso atendimento é humanizado e presencial em Viçosa, mas também utilizamos ferramentas digitais para facilitar o envio de documentos.'
  }
]);


export const COMPANY_TESTIMONIALS: Testimonial[] = z.array(TestimonialSchema).parse([
  {
    name: 'João Silva',
    role: 'Proprietário da Padaria Central',
    text: 'A equipe da contabilidade cuida da minha contabilidade há mais de 10 anos. Confiança total e atendimento sempre muito próximo.',
    initials: 'JS'
  },
  {
    name: 'Maria Oliveira',
    role: 'CEO da TechViçosa',
    text: 'Migramos para a Contabilidade  durante nossa expansão. A segurança fiscal que eles nos passam é essencial para focarmos no produto.',
    initials: 'MO'
  },
  {
    name: 'Ricardo Santos',
    role: 'Produtor Rural',
    text: 'Sempre tive dúvidas sobre a tributação no campo. Aqui encontrei respostas claras e um planejamento que realmente funciona.',
    initials: 'RS'
  }
]);