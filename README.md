# CHUNK FLOW — versão inicial (PWA)

Treinador pessoal de chunks de inglês. Código React + TypeScript + Vite, sem login nem APIs pagas.

## Recursos
- Biblioteca com 2.000 registros importados de uma planilha de estudos anterior, **ainda sem auditoria linguística item a item**.
- Pesquisa, filtros, favoritos, traduções opcionais, áudio por voz do navegador.
- Construtor de frases e exercícios de reconhecimento, com registro de progresso local.
- Backup do progresso por exportação/importação de arquivo JSON.
- PWA instalável com suporte offline parcial após a primeira visita.

## Executar localmente

Instale Node.js 22 e rode:

```sh
npm install
npm run dev
```

Acesse a URL indicada no terminal. Para compilar use `npm run build`.

## Publicar no GitHub Pages (gratuito para repositórios públicos)

1. Crie ou use um repositório público no GitHub, preferencialmente `chunk-flow` (sem ponto no final).
2. Envie **o conteúdo desta pasta**, não o arquivo `.zip` e nem uma pasta extra aninhada, para a raiz do repositório. Inclua o arquivo oculto `.github/workflows/deploy.yml`.
3. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
4. Na aba **Actions**, acompanhe o workflow **Publicar CHUNK FLOW no GitHub Pages** e verifique a conclusão das etapas build e deploy.
5. O endereço, depois da publicação, será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

A configuração do Vite usa `GITHUB_REPOSITORY` no build para corrigir os endereços dos arquivos em um subdiretório do GitHub Pages.

## Limitações

- Não há reconhecimento de voz nem correção de pronúncia nesta versão. O quiz mede reconhecimento, não fluência.
- O progresso permanece neste dispositivo/navegador e não sincroniza entre aparelhos. Faça backup em JSON.
- A qualidade e disponibilidade das vozes, incluindo offline, dependem do navegador e sistema.
- Os 2.000 registros foram importados e precisam ser revisados, pois não representam uma lista cientificamente ordenada por frequência.
- Dependências npm exigem acesso à internet na primeira instalação e nos builds. Não há custos obrigatórios dentro dos limites do plano gratuito do GitHub Pages.
