import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
          Polityka Prywatności
        </h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl text-foreground font-semibold mb-4">1. Informacje ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług firmy Crafting Life (dalej "Administrator").
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground font-semibold mb-4">2. Jakie dane zbieramy?</h2>
            <p>
              Podczas korzystania z naszej strony internetowej (w tym z formularza kontaktowego) możemy prosić o podanie danych osobowych takich jak: Imię i nazwisko, Adres e-mail, Numer telefonu.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground font-semibold mb-4">3. W jakim celu przetwarzamy dane?</h2>
            <p>
              Dane przetwarzane są w celu odpowiedzi na wiadomości przesłane przez formularz kontaktowy, umożliwienia kontaktu z klientem oraz (za odrębną zgodą) przedstawiania ofert marketingowych. (Art. 6 ust. 1 lit. b oraz lit. f RODO).
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground font-semibold mb-4">4. Prawa użytkownika</h2>
            <p>
              Zgodnie z przepisami RODO masz prawo do: bycia poinformowanym o przetwarzaniu, dostępu do swoich danych, sprostowania, usunięcia ("prawo do bycia zapomnianym") lub ograniczenia przetwarzania. Skontaktuj się z nami w celu realizacji tych praw.
            </p>
          </section>

          <div className="p-6 bg-secondary mt-12 border-l-4 border-primary">
            <h3 className="font-semibold text-foreground mb-2">Masz pytania dotyczące swoich danych?</h3>
            <p>Skontaktuj się z naszym Inspektorem Ochrony Danych pod adresem: kontakt@craftinglife.pl</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
