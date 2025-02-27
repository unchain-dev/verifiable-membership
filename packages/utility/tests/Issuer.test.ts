import { Issuer, IIssuer } from '@utility';

const testddo: IIssuer = {
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/suites/jws-2020/v1',
  ],
  id: 'did:web:nc163.github.io:.well-known',
  verificationMethod: [
    {
      id: '#key-1',
      controller: '',
      type: 'EcdsaSecp256k1VerificationKey2019',
      publicKeyJwk: {
        crv: 'K-256',
        x: 'gxhTW1QQXUp6rmDAj8RflocYG0_fxiW9GnU_pzl_7XU',
        y: 'NUfxHKhpZkby86ywjjEBavrCPmMMXRH1n2H-9XsNKqU',
        kty: 'EC',
      },
    },
  ],
  service: [
    {
      id: '#issuer-profile',
      type: 'IssuerProfile',
      serviceEndpoint: 'https://nc163.github.io/.well-known/profile.json',
    },
  ],
};

test('check', () => {
  const issuer = new Issuer(testddo);
});