# Fluxo de Trabalho com Git e Pull Requests

Este guia descreve o fluxo recomendado para trabalhar em melhorias contínuas usando uma branch de trabalho (feature, refactor, fix, etc.) e a branch principal (`main`).

1. **Sincronize sua branch de trabalho com a `main`**
   Antes de começar uma nova melhoria, garanta que sua branch está atualizada:

```bash
git checkout main
git pull origin main
git checkout <nome-da-sua-branch>
git merge main
# ou, para um histórico linear (recomendado apenas se esta branch for usada só por você, nunca compartilhada):
# git rebase main
```

2. **Implemente a melhoria**
   Faça as alterações desejadas no código na sua branch de trabalho (`<nome-da-sua-branch>`).

3. **Commit e Push**
   Adicione e faça commit das mudanças com uma mensagem clara:

```bash
git add .
git commit -m "feat: descrição clara da melhoria"
git push origin <nome-da-sua-branch>
```

4. **Crie o Pull Request (PR)**
   No GitHub, crie um PR da sua branch de trabalho (`<nome-da-sua-branch>`) para a `main`.
   Descreva bem as mudanças realizadas.
   Faça a revisão do PR (pode ser auto-revisão).

5. **Merge do PR**
   Após revisar, faça o merge do PR na `main`.
   Se preferir, use "Squash and merge" para um histórico mais limpo.
   Mantenha a sua branch de trabalho (`<nome-da-sua-branch>`) para continuar usando em novas melhorias, se desejar.

6. **Sincronize novamente sua branch de trabalho**
   Após o merge, atualize sua branch para evitar conflitos futuros:

```bash
git checkout main
git pull origin main
git checkout <nome-da-sua-branch>
git merge main
# ou, para um histórico linear (recomendado apenas se esta branch for usada só por você, nunca compartilhada):
# git rebase main
```

7. **Repita o ciclo**
   Continue desenvolvendo novas melhorias na mesma branch, seguindo os passos acima para cada nova feature ou refatoração.

**Dicas Extras:**

- Use mensagens de commit e PRs descritivas.
- Sempre sincronize sua branch de trabalho após cada merge.
- Para um histórico ainda mais limpo, considere criar uma branch nova para cada melhoria (opcional).
