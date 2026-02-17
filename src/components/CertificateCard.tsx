import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, X } from "lucide-react";

interface CertificateProps {
  title: string;
  institution: string;
  hours: number;
  date: string;
  description: string;
  imageUrl?: string; // URL para a imagem/badge do certificado (agora opcional)
  embedId?: string; // ID do badge do Credly para embed
  linkUrl: string; // URL de validação ou link para a imagem grande
}

const CertificateCard: React.FC<CertificateProps> = ({
  title,
  institution,
  hours,
  date,
  description,
  imageUrl,
  embedId,
  linkUrl,
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (embedId) {
      const scriptId = "credly-embed-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.type = "text/javascript";
        script.async = true;
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        document.body.appendChild(script);
      }
    }
  }, [embedId]);

  return (
    <>
      <Card className="cyber-card group p-6 md:p-8">
        <CardContent className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-[300px] min-h-[200px] flex-shrink-0 flex items-center justify-center bg-black/5 rounded-lg overflow-hidden">
            {embedId ? (
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id={embedId}
                data-share-badge-host="https://www.credly.com"
              ></div>
            ) : (
              <div
                className="w-full h-[200px] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(true);
                }}
                role="button"
                aria-label={`Ver certificado ${title}`}
              >
                <img
                  src={imageUrl}
                  alt={`Certificado ${title}`}
                  className="w-full h-full object-contain rounded-lg border border-border group-hover:border-cyan-500 transition-colors"
                />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <CardTitle className="text-lg font-bold leading-tight group-hover:text-cyan-400 transition-colors mb-1">
                  {title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{institution}</p>
              </div>
              <Award className="w-6 h-6 text-cyan-500 flex-shrink-0 ml-4" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-xs">
                  {hours}h
                </Badge>
                <span className="text-muted-foreground">{date}</span>
              </div>
              <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-block"
              >
                <Badge variant="outline" className="text-xs">
                  Ver Certificado
                </Badge>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal - Apenas para imagens estáticas */}
      {showModal && imageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-7xl w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="w-full h-[90vh] bg-black/20 rounded-lg flex items-center justify-center">
              <img
                src={imageUrl}
                alt={`Certificado ${title}`}
                className="w-full h-full object-contain rounded-lg p-4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
