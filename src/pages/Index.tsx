import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Laptop, Wrench, Zap, ShieldCheck, Award, Search, MessageCircle, ClipboardList, Settings, Package, MapPin, Phone, Clock, Star, Monitor, TrendingUp, Droplets, Database, HardDrive } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Avitiz<span className="text-primary">.</span>
          </h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#servicos" className="text-foreground/80 hover:text-primary transition-colors">Serviços</a>
            <a href="#diferenciais" className="text-foreground/80 hover:text-primary transition-colors">Diferenciais</a>
            <a href="#processo" className="text-foreground/80 hover:text-primary transition-colors">Processo</a>
            <a href="#sobre" className="text-foreground/80 hover:text-primary transition-colors">Sobre</a>
            <Button size="sm" variant="hero">Contato</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Assistência Técnica Especializada 24/7
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Sua Solução Completa em Tecnologia. <span className="text-primary">Performance e Confiança Garantidas.</span>
              </h2>
              <p className="text-muted-foreground text-lg">Assistência técnica especializada para PCs, Notebooks e Consoles. De upgrades a recuperação de dados, temos a expertise que você precisa.</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="hero" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Solicite Seu Orçamento Gratuito
                </Button>
                <Button size="lg" variant="outline">Conheça Nossos Serviços</Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-glow-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-card to-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <Laptop className="w-24 h-24 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Especialistas em Reparo Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluções tecnológicas completas e profissionais para manter seus equipamentos no auge.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[{
            icon: Monitor,
            title: "Montagem e Manutenção Profissional",
            description: "Desde a montagem de PCs personalizados de alta performance até a manutenção corretiva e preventiva de seu desktop ou notebook. Garantimos o funcionamento ideal do seu equipamento."
          }, {
            icon: TrendingUp,
            title: "Upgrade de Performance",
            description: "Aumente a vida útil e a velocidade do seu equipamento. Realizamos upgrades de hardware (memória RAM, SSD, placa de vídeo) e otimizações de software para o máximo desempenho."
          }, {
            icon: Droplets,
            title: "Limpeza Técnica Detalhada",
            description: "Remoção de poeira, troca de pasta térmica de alta qualidade e higienização completa para prevenir superaquecimento e prolongar a durabilidade dos componentes."
          }, {
            icon: Database,
            title: "Estratégias de Backup Seguras",
            description: "Implementação de rotinas de backup eficientes e seguras para proteger seus arquivos mais importantes contra perdas inesperadas."
          }, {
            icon: HardDrive,
            title: "Recuperação de Dados Críticos",
            description: "Serviço especializado para recuperar dados perdidos ou inacessíveis em HDs, SSDs, pendrives e outros dispositivos de armazenamento danificados."
          }].map((service, index) => <Card key={index} className="p-6 bg-card border-border hover:bg-card/80 hover:border-primary/50 transition-all hover:shadow-glow group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="diferenciais" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Por Que a Avitiz é a <span className="text-primary">Escolha Certa?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Compromisso com a excelência, transparência e a sua tranquilidade.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[{
            icon: Zap,
            title: "Diagnóstico Rápido e Preciso",
            description: "Diagnóstico rápido e preciso da reparação. Em minutos você já tem o orçamento completo."
          }, {
            icon: ShieldCheck,
            title: "Garantia de Qualidade",
            description: "Oferecemos 90 dias de garantia em todos os serviços e peças utilizadas. Sua tranquilidade é a nossa prioridade."
          }, {
            icon: Award,
            title: "Equipe Especializada",
            description: "Nossos técnicos são certificados e possuem expertise em diversas plataformas e marcas, garantindo um serviço de alto padrão."
          }, {
            icon: Search,
            title: "Acompanhamento Online",
            description: "Acompanhe o status do seu reparo em tempo real através de nossa plataforma. Você sempre saberá o que está acontecendo com seu equipamento."
          }].map((benefit, index) => <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-glow transition-all">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Seu Caminho para a Solução em <span className="text-primary">4 Passos</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Simples, rápido e totalmente transparente.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[{
            icon: MessageCircle,
            title: "Inicie o Atendimento",
            description: "Entre em contato conosco via WhatsApp ou preencha o formulário em nosso site. Descreva o problema e agende a entrega do seu equipamento.",
            step: "1"
          }, {
            icon: ClipboardList,
            title: "Análise e Proposta",
            description: "Realizamos uma análise técnica detalhada e enviamos um orçamento claro, com custo e prazo estimados para sua aprovação.",
            step: "2"
          }, {
            icon: Settings,
            title: "Execução do Serviço",
            description: "Após a sua aprovação, nossos técnicos realizam o serviço com o máximo de cuidado e utilizando peças de qualidade.",
            step: "3"
          }, {
            icon: Package,
            title: "Teste e Devolução",
            description: "Seu equipamento é testado rigorosamente para garantir o perfeito funcionamento e é devolvido pronto para uso.",
            step: "4"
          }].map((step, index) => <Card key={index} className="p-6 bg-card border-border relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 relative z-10 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                <p className="text-muted-foreground text-sm relative z-10">{step.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Nossa <span className="text-primary">Missão</span>
              </h2>
              <p className="text-muted-foreground text-lg italic">
                Tecnologia a serviço da sua vida.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nosso objetivo é ser o seu parceiro de confiança em soluções tecnológicas. Dedicamos-nos a oferecer um serviço de assistência técnica rápido, transparente e de alta qualidade, garantindo que você tenha o melhor desempenho e a maior durabilidade de seus equipamentos. Mais do que um serviço de reparo, somos a extensão da sua tranquilidade no mundo digital.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center animate-glow-pulse">
                  <Star className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Fale <span className="text-primary">Conosco</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Estamos prontos para ajudar. Entre em contato e tire suas dúvidas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">(55) 99999-7765</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Localização</h3>
                  <p className="text-muted-foreground">Sorocaba, SP - Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">Segunda - Sexta, 8:30h - 18h</p>
                  <p className="text-muted-foreground">Sábado, 8:30h - 13h</p>
                </div>
              </div>
            </div>
            <Card className="p-6 bg-card border-border">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Nome" className="bg-secondary border-border focus:border-primary" />
                </div>
                <div>
                  <Input placeholder="Email" type="email" className="bg-secondary border-border focus:border-primary" />
                </div>
                <div>
                  <Input placeholder="Telefone" className="bg-secondary border-border focus:border-primary" />
                </div>
                <div>
                  <Textarea placeholder="Mensagem" rows={4} className="bg-secondary border-border focus:border-primary resize-none" />
                </div>
                <Button className="w-full" size="lg" variant="hero">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>© 2025 <span className="text-primary font-semibold">Avitiz</span> - Soluções em Tecnologia. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com 💚 para sua tecnologia</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/5599999997765" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-glow-lg hover:scale-110 transition-transform z-50" aria-label="WhatsApp">
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>
    </div>;
};
export default Index;