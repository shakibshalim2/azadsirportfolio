import { HeroSection } from "@/components/sections/HeroSection";
import { NationalContextSection } from "@/components/sections/NationalContextSection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { BeliefSection } from "@/components/sections/BeliefSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { DigitalInfraSection } from "@/components/sections/DigitalInfraSection";
import { HumanCapitalSection } from "@/components/sections/HumanCapitalSection";
import { RegionalCommitmentSection } from "@/components/sections/RegionalCommitmentSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NationalContextSection />
      <IdentitySection />
      <BeliefSection />
      <EcosystemSection />
      <DigitalInfraSection />
      <HumanCapitalSection />
      <RegionalCommitmentSection />
      <CredibilitySection />
      <CollaborationSection />
    </>
  );
}
