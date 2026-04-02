/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Cpu, 
  Code2, 
  BrainCircuit, 
  Network, 
  ShieldCheck, 
  Smartphone,
  Award,
  ChevronRight,
  Terminal,
  X,
  MapPin
} from "lucide-react";

const projects = [
  {
    title: "Missões Tech 2025",
    description: "Ensino gamificado e inclusivo para crianças com dislexia e TDAH, premiado em 1º lugar e com recurso de realidade imersiva.",
    longDescription: "Aplicação desenvolvida a partir do Projeto Integrador do Senac, com foco em ensino gamificado e acessibilidade para crianças do ensino fundamental, especialmente voltada a alunos com dislexia, TDAH e outras dificuldades de aprendizagem. O projeto foi criado com o objetivo de tornar o processo de aprendizado mais acessível, interativo e envolvente por meio de recursos digitais.\n\n" +
                     "Destaques do projeto:\n" +
                     "• Aplicação com proposta educacional gamificada\n" +
                     "• Foco em acessibilidade e inclusão no aprendizado\n" +
                     "• Desenvolvimento web/mobile\n" +
                     "• Recurso complementar em realidade imersiva\n" +
                     "• Apresentação na Mostra de Projetos do Senac\n" +
                     "• Projeto com premiação de 1º lugar\n\n" +
                     "Minha atuação:\n" +
                     "Contribuí com o grupo na construção da proposta do projeto, com foco em acessibilidade, além da criação do vídeo utilizado em uma experiência com óculos VR como complemento da apresentação no evento. Também participei da apresentação da aplicação durante a mostra.\n\n" +
                     "Objetivo:\n" +
                     "Criar uma solução digital mais inclusiva e atrativa para apoiar o aprendizado de crianças com diferentes necessidades educacionais.",
    tags: ["Web", "Mobile", "IA", "Premiação"],
    icon: <Award className="w-6 h-6 text-accent" />,
    link: "#",
    images: [
      "/missoes-tech/1.png",
      "/missoes-tech/2.png",
      "/missoes-tech/3.png"
    ]
  },
  {
    title: "Inclusão Digital - Click Social",
    description: "Projeto de inclusão digital focado na recuperação de equipamentos descartados e estrutura de apoio para doação e triagem de máquinas.",
    longDescription: "Projeto voltado à inclusão digital, com foco na recuperação de equipamentos que seriam descartados e na criação de uma estrutura de apoio para arrecadação, triagem e reaproveitamento de máquinas destinadas à doação.\n\n" +
                     "Destaques do projeto:\n" +
                     "• Desenvolvimento do site oficial do projeto\n" +
                     "• Estrutura de divulgação institucional\n" +
                     "• Formulário para captação de equipamentos\n" +
                     "• Apoio à triagem de hardware\n" +
                     "• Participação em manutenção preventiva e corretiva\n" +
                     "• Contribuição na construção da identidade do projeto\n\n" +
                     "Minha atuação:\n" +
                     "Desenvolvimento do site do projeto com foco em divulgação, presença digital e captação de equipamentos, além de participação no processo de branding, triagem e manutenção de computadores destinados à inclusão digital.\n\n" +
                     "Objetivo:\n" +
                     "Contribuir para ampliar o acesso à tecnologia por meio do reaproveitamento de equipamentos e da criação de uma estrutura digital de apoio ao projeto.",
    tags: ["Web Design", "Hardware", "Social"],
    icon: <Network className="w-6 h-6 text-accent" />,
    link: "#",
    images: [
      "/click-social/1.png",
      "/click-social/2.png",
      "/click-social/3.png"
    ]
  },
  {
    title: "Gold Level",
    description: "Projeto em desenvolvimento\n\nAplicativo gamificado voltado ao desenvolvimento pessoal, hábitos, rotina e evolução do usuário por meio de missões, progresso e apoio de IA.",
    longDescription: "Aplicativo com foco em desenvolvimento pessoal, organização de hábitos e evolução de rotina por meio de um sistema gamificado inspirado em progressão de jogos. A proposta é transformar tarefas e metas da vida real em desafios estruturados, incentivando constância, disciplina e acompanhamento de evolução pessoal.\n\n" +
                     "Destaques do projeto:\n" +
                     "• Missões diárias e semanais\n" +
                     "• Organização de hábitos e rotina\n" +
                     "• Sistema de progresso por pontos\n" +
                     "• Interface com estatísticas de evolução\n" +
                     "• Estrutura inspirada em mecânicas de RPG\n" +
                     "• Validação de atividades com apoio de IA\n\n" +
                     "Minha atuação:\n" +
                     "Concepção da ideia, estruturação da lógica do sistema e desenvolvimento da aplicação com foco em usabilidade, engajamento e tecnologia aplicada ao cotidiano.\n\n" +
                     "Objetivo:\n" +
                     "Criar uma solução digital que una produtividade, desenvolvimento pessoal e gamificação para incentivar progresso real fora da tela.",
    tags: ["IA", "React Native", "LLMs"],
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    link: "#",
    images: [
      "/gold-level/1.png",
      "/gold-level/2.png",
      "/gold-level/3.png"
    ],
    status: "developing"
  },
  {
    title: "Laboratório de TI",
    description: "Projeto em desenvolvimento\n\nPlataforma interativa voltada ao treinamento de diagnóstico técnico em computadores, com foco em defeitos de hardware e software.",
    longDescription: "Plataforma interativa voltada ao treinamento de diagnóstico técnico em computadores, com foco em defeitos de hardware e software. O projeto simula situações reais de suporte por meio de ordens de serviço, relatos de clientes e tomada de decisão técnica, incentivando raciocínio lógico, análise de falhas e resolução de problemas.\n\n" +
                     "Destaques do projeto:\n" +
                     "• Simulação de ordens de serviço\n" +
                     "• Relatos de clientes com falhas técnicas\n" +
                     "• Diagnóstico prático de hardware e software\n" +
                     "• Sistema de perguntas limitadas para investigação\n" +
                     "• Pontuação, conquistas e progressão\n" +
                     "• Modo competitivo para uso educacional\n" +
                     "• Painel para acompanhamento de desempenho\n" +
                     "• Biblioteca de defeitos e aprendizado técnico\n\n" +
                     "Minha atuação:\n" +
                     "Concepção da ideia, estruturação da lógica do sistema, definição da experiência do usuário e desenvolvimento da solução com foco em aprendizado prático, engajamento e aplicação educacional.\n\n" +
                     "Objetivo:\n" +
                     "Criar uma plataforma que torne o aprendizado técnico mais interativo, realista e acessível para estudantes e profissionais em formação na área de TI.",
    tags: ["Hardware", "Software", "Diagnóstico"],
    icon: <Terminal className="w-6 h-6 text-accent" />,
    link: "#",
    images: [
      "/laboratorio-ti/1.png",
      "/laboratorio-ti/2.png",
      "/laboratorio-ti/3.png"
    ],
    status: "developing"
  },
  {
    title: "Sobre este portfólio",
    description: "Além de apresentar minha trajetória, este site também funciona como um projeto prático, desenvolvido com dedicação e criatividade para explorar organização de interface, apresentação de conteúdo, identidade digital e construção de presença profissional na área de tecnologia.",
    tags: ["UI/UX", "React", "Portfolio"],
    icon: <Code2 className="w-6 h-6 text-accent" />,
    images: ["/antigravity.svg"], // Using a placeholder since it's a portfolio card
    noDetails: true
  }
];

const softSkills = [
  "Proatividade & Organização",
  "Resolução de Problemas",
  "Trabalho em Equipe",
  "Pensamento Crítico & Analítico",
  "Adaptabilidade",
  "Ética Profissional",
  "Criatividade",
  "Raciocínio lógico",
  "Aprendizagem ativa",
  "Gestão do tempo"
];

const tools = [
  { name: "Antigravity", icon: "google", localIcon: "/antigravity.svg", color: "4285F4" },
  { name: "AI Studio", icon: "googlegemini", color: "8E75B2" },
  { name: "ChatGPT", icon: "openai", localIcon: "/chatgpt.svg", color: "10A37F" },
  { name: "CapCut", icon: "capcut", localIcon: "/capcut.svg", color: "FFFFFF" },
  { name: "Photoshop", icon: "adobephotoshop", localIcon: "/photoshop.svg", color: "31A8FF" },
  { name: "Canva", icon: "canva", localIcon: "/canva.svg", color: "00C4CC" },
  { name: "OneDrive", icon: "microsoftonedrive", localIcon: "/onedrive.svg", color: "0078D4" },
  { name: "Google Drive", icon: "googledrive", color: "4285F4" },
  { name: "GitHub", icon: "github", color: "FFFFFF" },
  { name: "Netlify", icon: "netlify", color: "00C7B7" },
  { name: "Supabase", icon: "supabase", color: "3FCF8E" },
  { name: "Office", icon: "microsoftoffice", localIcon: "/pacote office.svg", color: "D83B01" },
];


function ImageLightbox({ src, onClose }: { src: string, onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[210] border border-white/10"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <X size={24} />
      </motion.button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-full max-h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={import.meta.env.BASE_URL + src.slice(1)} 
          alt="Ampliada" 
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/5"
        />
      </motion.div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  if (!project) return null;
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-accent/5 flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all z-50"
        >
          <X size={20} />
        </button>

        {/* Abstract background glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Scrollable Content Area */}
        <div 
          className="overflow-y-auto p-6 md:p-12 custom-scrollbar relative z-10 w-full"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="order-2 lg:order-1">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      {project.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight uppercase italic">{project.title}</h2>
               </div>
               
               <div className="space-y-6">
                 <p className="text-gray-300 leading-relaxed text-base md:text-lg font-medium opacity-90 whitespace-pre-line">
                    {project.longDescription || project.description}
                 </p>
                 
                 <div className="pt-6 border-t border-white/5">
                   <h5 className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent mb-4">Tecnologias & Tags</h5>
                   <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                          <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full bg-accent/5 border border-white/10 text-gray-400">
                              {tag}
                          </span>
                      ))}
                   </div>
                 </div>

                 {/* Footer Close Button for easier access after reading */}
                 <div className="pt-12 pb-4">
                    <button 
                      onClick={onClose}
                      className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group"
                    >
                      CONCLUIR LEITURA <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
               </div>
            </div>

            <div className="relative h-[250px] md:h-[400px] lg:h-[450px] flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
               {project.images?.map((img: string, idx: number) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, rotate: idx % 2 === 0 ? -10 : 10, scale: 0.8 }}
                   animate={{ opacity: 1, rotate: (idx === 0 ? -8 : idx === 1 ? 6 : -3), scale: 1 }}
                   transition={{ delay: 0.2 + (idx * 0.1) }}
                   whileHover={{ scale: 1.05, zIndex: 50, rotate: 0 }}
                   onClick={() => setZoomedImage(img)}
                   className="absolute w-32 md:w-48 lg:w-56 p-2 md:p-3 bg-[#f5f5f5] shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-sm transform cursor-pointer transition-all border border-white/20 group/photo"
                   style={{ 
                     left: idx === 0 ? '5%' : idx === 1 ? '45%' : '25%',
                     top: idx === 0 ? '5%' : idx === 1 ? '10%' : '40%',
                     zIndex: idx
                   }}
                 >
                   <div className="aspect-square bg-[#ddd] overflow-hidden mb-2 md:mb-3 rounded-[1px] relative">
                     <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 group-hover/photo:bg-black/40 transition-all duration-300 backdrop-blur-[2px] opacity-0 group-hover/photo:opacity-100">
                        <div className="bg-accent/20 p-2 rounded-full mb-2 border border-accent/40 scale-75 group-hover/photo:scale-100 transition-transform">
                           <ExternalLink className="text-white" size={20} />
                        </div>
                        <span className="text-[8px] font-bold text-white uppercase tracking-tighter drop-shadow-md">Clique para ampliar</span>
                     </div>
                     <img 
                      src={import.meta.env.BASE_URL + img.slice(1)} 
                      alt={`Project snapshot ${idx}`} 
                      className={`w-full h-full ${project.title === "Laboratório de TI" ? 'object-contain bg-white/50' : 'object-cover'}`} 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.title + idx}/400/400`;
                      }}
                     />
                   </div>
                   <div className="h-4 md:h-6 w-full flex items-center justify-center border-t border-black/5 pt-1 md:pt-2">
                      <span className="text-[7px] md:text-[9px] font-display font-black text-gray-400 uppercase tracking-widest">{project.title.split(' ')[0]} SNAP_{idx + 1}</span>
                   </div>
                 </motion.div>
               ))}
               {!project.images && (
                  <div className="p-8 text-center border-2 border-dashed border-white/10 rounded-3xl w-full">
                     <p className="text-gray-500 text-sm italic">Imagens do projeto em breve.</p>
                  </div>
               )}

            </div>
          </div>
        </div>

      </motion.div>

      <AnimatePresence>
        {zoomedImage && (
          <ImageLightbox src={zoomedImage} onClose={() => setZoomedImage(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen bg-grid-pattern">
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tighter text-white">
            LUCAS<span className="text-accent">.CAMARGO</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projetos</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contato</a>
          </div>
          <a 
            href={import.meta.env.BASE_URL + "Curriculo-Lucas-Camargo.pdf"} 
            download="Curriculo - Lucas Camargo.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold hover:bg-accent hover:text-black transition-all group"
          >
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" /> CURRÍCULO (PDF)
          </a>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
          </div>
          
          <div className="relative z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Técnico em Informática & Dev IA
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-tight">
                Lucas <span className="text-accent block">Camargo</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
                Projetos, soluções e aprendizado contínuo em TI, manutenção, hardware, redes e Inteligência Artificial.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-glow px-8 py-4 rounded-xl bg-accent text-black font-bold hover:scale-105 transition-transform">
                  Ver Projetos
                </a>
                <a href="#contact" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all">
                  Entrar em Contato
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="relative w-96 h-96 md:w-[36rem] md:h-[36rem] lg:w-[42rem] lg:h-[42rem]">
                {/* Decorative glow behind image */}
                <div className="absolute inset-0 bg-accent/15 rounded-full blur-[100px]" />
                
                <img 
                  src={import.meta.env.BASE_URL + "profile.png"} 
                  alt="Lucas Camargo" 
                  className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(22,163,74,0.3)] hover:scale-105 hover:drop-shadow-[0_0_60px_rgba(22,163,74,0.5)] transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About & Specialties Section */}
        <section id="about" className="py-24 px-6 bg-card-dark/30">
          <div className="max-w-7xl mx-auto">
            {/* Sobre Mim */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 italic">Sobre Mim</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Sou estudante de Técnico em Informática com foco em suporte, manutenção, tecnologia aplicada e desenvolvimento de soluções digitais. Tenho experiência prática em projetos acadêmicos, sociais e pessoais, unindo conhecimento técnico, criatividade e uso estratégico de Inteligência Artificial para resolver problemas de forma eficiente.
              </p>
            </motion.div>

            {/* Especialidades */}
            <div className="mb-16">
              <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl font-bold text-white mb-12 text-center italic"
              >
                Especialidades
              </motion.h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.05 }} className="glass-card p-6 glow-hover group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">Suporte Técnico</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Diagnóstico, manutenção, instalação, configuração e resolução de problemas em computadores e dispositivos.</p>
                </motion.div>

                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-6 glow-hover group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Terminal className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">Manutenção e Hardware</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Formatação, troca de componentes, organização de sistemas, periféricos e otimização de equipamentos.</p>
                </motion.div>

                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.15 }} className="glass-card p-6 glow-hover group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Network className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">Redes e Infraestrutura</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Configuração básica de redes (roteadores e switches). Instalação e conexão lógica e física.</p>
                </motion.div>

                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.2 }} className="glass-card p-6 glow-hover group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Code2 className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">Desenvolvimento de Soluções</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Criação de projetos web e aplicações em desenvolvimento com foco em utilidade prática e resolução de problemas.</p>
                </motion.div>

                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.25 }} className="glass-card p-6 glow-hover group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <BrainCircuit className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">IA Aplicada</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Uso de ferramentas de Inteligência Artificial para produtividade, prototipação, apoio à criação de soluções e aprendizado contínuo.</p>
                </motion.div>

                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ delay: 0.3 }} className="glass-card p-6 glow-hover group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Smartphone className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">Ferramentas Digitais</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">Experiência com diversas ferramentas de IA, edição de vídeo, imagem, texto e aplicativos essenciais para produtividade.</p>
                </motion.div>
              </div>
            </div>

            {/* Ferramentas & Tecnologias */}
            <div className="mt-16">
              <motion.p 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="text-center text-sm font-bold uppercase tracking-[0.3em] text-gray-500 mb-10"
              >
                Ferramentas & Tecnologias
              </motion.p>
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap justify-center gap-8"
              >
                {tools.map((tool, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="flex flex-col items-center gap-3 group cursor-default"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 group-hover:border-accent/30 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] transition-all duration-300">
                      <img 
                        src={tool.localIcon ? import.meta.env.BASE_URL + tool.localIcon.slice(1) : `https://cdn.simpleicons.org/${tool.icon}/${tool.color}`}
                        alt={tool.name}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-accent transition-colors duration-300">{tool.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* O que já fez */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-24 glass-card p-8 border-l-4 border-l-accent relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-white/5 items-center justify-center">
                  <span className="text-4xl text-accent font-serif leading-none mt-2">"</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2 mb-4">
                    Na Prática <ChevronRight className="text-accent hidden md:block" />
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg italic">
                    "Já atuei com suporte técnico (Help Desk), manutenção de computadores, cabeamento de rede, e participação em projetos acadêmicos e sociais. Também venho desenvolvendo aplicações e soluções próprias com foco em aprendizado técnico e desenvolvimento pessoal."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 italic">Projetos em Destaque</h2>
                <p className="text-gray-400 max-w-xl">Uma seleção de trabalhos que demonstram minha capacidade técnica e criatividade.</p>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative bg-[#0d0d0d] border border-white/10 rounded-[32px] overflow-hidden flex flex-col hover:border-accent/40 transition-all duration-500 shadow-2xl hover:shadow-accent/5 ${project.noDetails ? 'md:col-span-2' : ''}`}
                >
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Top Section / Image Preview Area */}
                  <div className="h-48 relative overflow-hidden">
                    {/* Background abstract pattern or image */}
                    <img 
                      src={import.meta.env.BASE_URL + project.images[0].slice(1)} 
                      alt="" 
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
                    
                    {/* Status Tag if any (using the metadata we had before) */}
                    {project.status === "developing" && (
                      <div className="absolute top-6 right-8 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-lg border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500/90 italic leading-none">Em desenvolvimento</span>
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-8 pt-8 flex-1 flex flex-col relative z-10">
                    <div className="mb-4">
                      <h4 className="text-2xl font-display font-black text-white hover:text-accent transition-colors uppercase italic tracking-tight">{project.title}</h4>
                      <div className="w-8 h-1 bg-accent/40 rounded-full mt-1 group-hover:w-16 transition-all duration-500" />
                    </div>
                    
                    <p className={`text-sm text-gray-400 mb-8 leading-relaxed ${!project.noDetails ? 'line-clamp-3' : ''}`}>
                      {project.description.replace("Projeto em desenvolvimento\n\n", "")}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold text-gray-500 uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-accent/10 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {!project.noDetails && (
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="mt-auto flex items-center justify-between w-full py-5 px-8 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 group/btn"
                      >
                        EXPLORAR PROJETO
                        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 bg-card-dark/20 relative overflow-hidden text-center">
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="font-display text-4xl font-bold text-white mb-12 uppercase italic tracking-tighter">Habilidades Pessoais</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-cyan-500/30 hover:to-cyan-500/5 group transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-inner">
                    <BrainCircuit size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-white mb-16 text-center italic uppercase italic tracking-tighter">Trajetória Profissional</h2>
            <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-9 h-9 rounded-full bg-accent flex items-center justify-center text-black">
                  <Smartphone size={18} />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Atualmente</span>
                <h4 className="text-xl font-bold text-white mt-1 uppercase italic tracking-tight">Autônomo em Tecnologia</h4>
                <p className="text-gray-400 mt-2">Manutenção de PC's, celulares Android e desenvolvimento de projetos digitais.</p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-9 h-9 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-white">
                  <Cpu size={18} />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Em Formação</span>
                <h4 className="text-xl font-bold text-white mt-1 uppercase italic tracking-tight">Técnico em Informática - Senac</h4>
                <p className="text-gray-400 mt-2">Aprofundamento técnico, aprendizado contínuo e participação ativa em projetos</p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-2 w-9 h-9 rounded-full bg-card-dark border border-white/10 flex items-center justify-center text-white">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Estágio (1 Ano)</span>
                <h4 className="text-xl font-bold text-white mt-1 uppercase italic tracking-tight">Auxiliar de T.I. - Hospital Santa Lúcia</h4>
                <p className="text-gray-400 mt-2">Suporte técnico, manutenção e instalação de redes, sistemas, e auxilio na gestão de infraestrutura e resolução de problemas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="py-24 px-6 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase italic">
              Entrar em <span className="text-accent">contato</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl text-lg leading-relaxed">
              Estou em constante evolução na área de tecnologia e aberto a oportunidades que envolvam aprendizado, desenvolvimento e aplicação prática em TI.
            </p>

            <div className="flex items-center gap-2 text-gray-400 mb-12 font-bold uppercase tracking-[0.2em] text-xs">
              <MapPin size={16} className="text-accent" />
              <span>Cruz Alta <span className="text-accent">-</span> RS</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a 
                href="https://wa.me/55984519845" 
                target="_blank" 
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent text-black font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,157,0.3)]"
              >
                <Smartphone size={20} /> WHATSAPP
              </a>
              <a 
                href="https://github.com/Sparvei" 
                target="_blank" 
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#333] text-white font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <Github size={20} /> GITHUB
              </a>
              <a 
                href="https://www.linkedin.com/in/lucas-profile-ti/" 
                target="_blank" 
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0077b5] text-white font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,119,181,0.3)]"
              >
                <Linkedin size={20} /> LINKEDIN
              </a>
              <a 
                href="mailto:Lucas.camargo_o@hotmail.com" 
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                <Mail size={20} /> EMAIL
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full pt-12 border-t border-white/5">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                © 2026 Lucas Camargo. Portfolio TI
              </span>
              <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
                <a href="https://www.linkedin.com/in/lucas-profile-ti/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/Sparvei" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                <a href="mailto:Lucas.camargo_o@hotmail.com" className="hover:text-white transition-colors">Email</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


